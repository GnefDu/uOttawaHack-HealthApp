import pandas as pd
import numpy as np
import sklearn
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pickle


def main():
    
    # Open Pickle
    infile = open('NBStrokeClassifier','rb')
    clf = pickle.load(infile)
    infile.close()

    # Change these
    # The following and int and floats
    age = 1
    hypertension = 1
    glucose = 1
    bmi = 1

    # The following can be 1 or 0
    # 1 == true
    # Only one can be 1 within the same group the rest have to be 0
    gender_female = 1
    gender_male = 1
    smoke_unknown = 1
    smoke_former = 1
    smoke_never = 1
    smoke_smokes = 1
    heart_disease_no = 1
    heart_disease_yes = 1
    

    # This will output a number [1] or [0]
    prediction = clf.predict(np.array([[age,hypertension,glucose,bmi,gender_female, gender_male, smoke_unknown, smoke_former,smoke_never,smoke_smokes,heart_disease_no,heart_disease_yes]]))


    # Your ouput will be [0] or [1]
    return prediction

    
print(main())




