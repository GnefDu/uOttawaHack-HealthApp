import psycopg2
import sys

#select all test results with
def updateTestResultWithDiagnosis(diagnosis, testResultID):
    try:
        conn = psycopg2.connect(host="localhost", port=5432, dbname='hack2023', user='postgres', password='uottawahack2023')
        cur = conn.cursor() 
        try:
            cur.execute(
                """update test_result set doctor_diagnosis = %s where tid = %s;""", (diagnosis, testResultID))
            conn.commit()
            print("DB: All Done!")
            cur.close()

        except Exception as qerr:
            print("Could not run query: ", qerr) 
            conn.rollback()

    except Exception as sqle:
        print("Exception : ", sqle)

diagnosis = sys.argv[1]
testResultID = sys.argv[2]
updateTestResultWithDiagnosis(diagnosis, testResultID)