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
    infile = open('LRSHeartDiseaseClassifier','rb')
    clf = pickle.load(infile)
    infile.close()


    # Change these
    # These are float
    BMI = 1
    PhysicalHealth = 1
    MentalHealth = 1
    SleepTime = 1
    # These are 1 or 0
    Smoking_No = 1
    Smoking_Yes = 1
    AlcoholDrinking_No = 1
    AlcoholDrinking_Yes = 1
    Stroke_No = 1
    Stroke_Yes = 1
    DiffWalking_No = 1
    DiffWalking_Yes = 1
    Sex_Female = 1
    Sex_Male = 1
    AgeCategory_18_24 = 1
    AgeCategory_25_29 = 1
    AgeCategory_30_34 = 1
    AgeCategory_35_39 = 1
    AgeCategory_40_44 = 1
    AgeCategory_45_49 = 1
    AgeCategory_50_54 = 1
    AgeCategory_55_59 = 1
    AgeCategory_60_64 = 1
    AgeCategory_65_69 = 1
    AgeCategory_70_74 = 1
    AgeCategory_75_79 = 1
    AgeCategory_80_or_older = 1
    Race_American_Indian_Alaskan_Native = 1
    Race_Asian = 1
    Race_Black = 1
    Race_Hispanic = 1
    Race_Other = 1
    Race_White = 1
    Diabetic_No = 1
    Diabetic_No_borderline_diabetes = 1
    Diabetic_Yes = 1
    Diabetic_Yes_during_pregnancy = 1
    PhysicalActivity_No = 1
    PhysicalActivity_Yes = 1
    GenHealth_Excellent = 1
    GenHealth_Fair = 1
    GenHealth_Good = 1
    GenHealth_Poor = 1
    GenHealth_Very_good = 1
    Asthma_No = 1
    Asthma_Yes = 1
    KidneyDisease_No = 1
    KidneyDisease_Yes = 1
    SkinCancer_No = 1
    SkinCancer_Yes = 1
    
    # This will output a number [1] or [0]
    prediction = clf.predict(np.array([[BMI,PhysicalHealth,MentalHealth,SleepTime,Smoking_No,Smoking_Yes,AlcoholDrinking_No,AlcoholDrinking_Yes,Stroke_No,
                                         Stroke_Yes,DiffWalking_No,DiffWalking_Yes,Sex_Female,Sex_Male,AgeCategory_18_24,AgeCategory_25_29,AgeCategory_30_34,
                                         AgeCategory_35_39,AgeCategory_40_44,AgeCategory_45_49,AgeCategory_50_54,AgeCategory_55_59,AgeCategory_60_64,AgeCategory_65_69,
                                         AgeCategory_70_74,AgeCategory_75_79,AgeCategory_80_or_older,Race_American_Indian_Alaskan_Native,Race_Asian,Race_Black,
                                         Race_Hispanic,Race_Other,Race_White,Diabetic_No,Diabetic_No_borderline_diabetes,Diabetic_Yes,Diabetic_Yes_during_pregnancy,
                                         PhysicalActivity_No,PhysicalActivity_Yes,GenHealth_Excellent,GenHealth_Fair,GenHealth_Good,GenHealth_Poor,GenHealth_Very_good,
                                         Asthma_No,Asthma_Yes,KidneyDisease_No,KidneyDisease_Yes,SkinCancer_No,SkinCancer_Yes]]))


    # Your ouput will be [0] or [1]
    return prediction

print(main())




