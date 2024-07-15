# Predictive Maintenance Engine Classification for NASA Turbofan Engines

## Overview
Jet engines are one of the crucial components used in NASA's space industry. This engine is used as a source of power for a vehicle such as an airplane to be able to fly with the thrust generated from the engine. Seeing how crucial the role of the engine in a vehicle, an analysis is needed that is able to predict the health of the engine whether it is still functioning normally or has begun to require further maintenance. This aims to avoid sudden engine failure that could potentially endanger the vehicle. One way to measure engine performance is by using sensors. These sensors work to find out various things such as temperature, rotation, pressure, engine vibration, and others. Therefore, in this project, an analysis process will be carried out to predict engine health based on sensor data before the engine actually dies.

[CMAPSS Jet Engine Simulated Data]
(https://data.nasa.gov/Aerospace/CMAPSS-Jet-Engine-Simulated-Data/ff5v-kuh6/about_data)
provided by NASA is being used in this project to determine whether the machine is normal or failure.

## File Descriptions

1. `asset`. This folder contains images to help the reader understand the process.
2. `dataset`. This folder contains the datasets used in this project. There are 3 files namely train_FD001.txt, test_FD001.txt, and RUL_FD001.txt. However, only the train_FD001.txt file is used in this project.
3. `flask`. This folder contains a flask environment that is used to create a dashboard so that users are facilitated by only entering sensor data and then getting machine classification results without having to know the program code that works behind it.
4. `Survival_Analysis_Predictive_Maintenance.ipynb`. This file contains program code in the process of processing NASA datasets starting from business understanding, data understanding, data preparation, modeling, and evaluation (CRISP-DM methodology). From this file, the dataset is processed in such a way as to produce a model that is ready to be used for classification on the dashboard.

## Evaluation Result
1. Random Forest
   - Accuracy: 96.75%
   - Precision: 74.83%
   - Recall: 94.11%
   = F1 Score: 83.37%
2. Artificial Neural Network
   - Accuracy: 96.77%
   - Precision: 75.22%
   - Recall: 93.55%
   = F1 Score: 83.39%

## Flask App Result
1. Homepage
![homepage](aset/tampilan awal.jpeg)
2. Machine Status: Normal
![normal](aset/tampilan mesin failure.jpeg)
3. Machine Status: Failure
![failure](aset/tampilan mesin failure.jpeg)