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
    infile = open('LRDiabetesClassifier','rb')
    clf = pickle.load(infile)
    infile.close()

    # Change these
    glucose = 1
    bp = 1
    bmi = 1
    age = 1

    # This will output a number [1] or [0]
    prediction = clf.predict(np.array([[glucose, bp, bmi, age]]))


    # Your ouput will be [0] or [1]
    return prediction

print(main())




