import psycopg2
import sys

#select all test results with
def addNewTestResultWithMLPrediction(age, glucose, bp, bmi, lrdResult, patientHCI, providerID):
    try:
        conn = psycopg2.connect(host="localhost", port=5432, dbname='hack2023', user='postgres', password='uottawahack2023')
        cur = conn.cursor() 
        try:
            cur.execute(
                """insert into test_result values ('88bf5b88-e0b8-42e0-8dcf-dc8c4aefc000', '2023/02/12', %s, %s, %s, %s, %s);""", (glucose, bp, bmi, age, lrdResult))
            conn.commit()
            try:
                cur.execute(
                """insert into test_result_for_patient values (%s, '88bf5b88-e0b8-42e0-8dcf-dc8c4aefc000');""", ([patientHCI]))
                conn.commit()
                try:
                    cur.execute(
                        """insert into test_result_from_provider values (%s, '88bf5b88-e0b8-42e0-8dcf-dc8c4aefc000');""", ([providerID]))
                    conn.commit()
                    print("DB: All Done!")
                    cur.close()

                except Exception as qerr:
                    print("Could not run query1: ", qerr) 
                    conn.rollback()

            except Exception as qerr:
                print("Could not run query2: ", qerr) 
                conn.rollback()

        except Exception as qerr:
            print("Could not run query3: ", qerr) 
            conn.rollback()

    except Exception as sqle:
        print("Exception : ", sqle)

age = sys.argv[1]
glucose = sys.argv[2]
bp = sys.argv[3]
bmi = sys.argv[4]
lrdResult = sys.argv[5]
patientHCI = sys.argv[6]
providerID = sys.argv[7]
addNewTestResultWithMLPrediction(age, glucose, bp, bmi, lrdResult, patientHCI, providerID)