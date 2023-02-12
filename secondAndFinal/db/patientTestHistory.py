import psycopg2
import sys

#select all test results with
def collectPatientTestHistory(patientHCN):
    try:
        conn = psycopg2.connect(host="localhost", port=5432, dbname='hack2023', user='postgres', password='uottawahack2023')
        cur = conn.cursor() 
        try:
            cur.execute(
                """select * from test_result 
                inner join test_result_for_patient on test_result_for_patient.tid = test_result.tid 
                where test_result_for_patient.healthCardNumber = %s;""", ([patientHCN]))

            result = cur.fetchall()

            cur.close()
            print(result)
            return result

        except Exception as qerr:
            print("Could not run query: ", qerr) 
            conn.rollback()

    except Exception as sqle:
        print("Exception : ", sqle)

patientHCN = sys.argv[1]
collectPatientTestHistory(patientHCN)