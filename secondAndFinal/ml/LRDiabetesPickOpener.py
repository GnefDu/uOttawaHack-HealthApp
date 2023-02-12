import pandas as pd
import numpy as np
import sklearn
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pickle
import sys


def main():
    
    # Open Pickle
    infile = open('./ml/LRDiabetesClassifier','rb')
    clf = pickle.load(infile)
    infile.close()

    # Change these
    glucose = int(sys.argv[2])
    bp = int(sys.argv[3])
    bmi = int(sys.argv[4])
    age = int(sys.argv[1])

    # This will output a number [1] or [0]
    prediction = clf.predict(np.array([[glucose, bp, bmi, age]]))

    # Your ouput will be [0] or [1] 1 = postiive, having it
    return prediction

print(main())




