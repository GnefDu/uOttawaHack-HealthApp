import psycopg2
import sys
#funtion to initialize the database, resets the schema (hopefully it is named public) then inserts all tables, relations, functions, and triggers
def initialize():
    #open database
    try:
        conn = psycopg2.connect(host="localhost", port=5432, dbname='hack2023', user='postgres', password='uottawahack2023')
        cur = conn.cursor() 
        #run DDL.sql to add tables
        try:
            cur.execute(open('./db/DDL.sql','r').read())
            conn.commit();
            print("Tables added to the database")
            #run DML.sql to insert relations
            try:
                cur.execute(open('./db/DML.sql','r').read())
                conn.commit();
                print("Relations inserted to the database")
            except Exception as dml_err:
                print("Could not run DML.sql ", dml_err)
                conn.rollback()
                sys.exit()
        except Exception as ddl_err:
            print("Could not run DDL.sql ", ddl_err) 
            conn.rollback()
            sys.exit()
    except Exception as initial_err:
        print("Exception : ", initial_err)
        sys.exit()

initialize()