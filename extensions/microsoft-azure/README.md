# Microsoft Azure Cognitive Services

Integrates Cognigy with the Microsoft Azure Cognitive Services ([Cognitive Services | Microsoft Azure](https://azure.microsoft.com/de-de/services/cognitive-services/))

## Connection

This Extension needs several **Connections** to be defined and passed to the Nodes. To include these APIs into Cognigy you need the **API Token** and create a Cognigy Connection for each of these APIs.

You will require the following Secrets for the respective Nodes:

- **Spellcheck**
  - key: key
  - value: Cognitive Services API Key
  
- **Named Entity Recognition**, **Extract Keyphrases**, **Recognize Language**, **Sentiment Analysis**

  1.
    - key: key
    - value: Text Analytics API Key
  2.
    - key: region
    - value: Azure Region
  


## Node: Spell Check
 [Resource](https://docs.microsoft.com/de-de/azure/cognitive-services/bing-spell-check/quickstarts/nodejs) 

Finds spelling mistakes in the **text** input and predicts the correct word: 
```json
  "spellCheck": {
    "_type": "SpellCheck",
    "flaggedTokens": [
      {
        "offset": 0,
        "token": "thi",
        "type": "UnknownToken",
        "suggestions": [
          {
            "suggestion": "the",
            "score": 0.778841524178657
          },
          {
            "suggestion": "this",
            "score": 0.734106408066573
          }
        ]
      },
    ]
  }
```
You have to specify the **language** of the given text, so that Microsoft is able to compare it. 

## Node: Recognize Language 
This node recognizes the language of the given **text**: 
```json
"recognizeLanguage": {
    "documents": [
      {
        "id": "1",
        "detectedLanguages": [
          {
            "name": "English",
            "iso6391Name": "en",
            "score": 0.875
          }
        ]
      }
    ],
    "errors": []
  }
```

## Node: Extract Keyphrases
This node extracts **Keyphrases** from a given **text**, by which you must specify the **language** of the given input: 
```json
  "keyphrases": {
    "documents": [
      {
        "id": "1",
        "keyPhrases": [
          "company",
          "Germany",
          "Cognigy",
          "Düsseldorf"
        ]
      }
    ],
    "errors": []
  }
```

## Node: Named Entity Recgonition
Unlike the **Extract Keyphrases** node, this one detects entities such as locations, organizations or persons and responses these. You have to define the **language** and the **text**. 
```json
"ner": {
    "documents": [
      {
        "id": "1",
        "entities": [
          {
            "name": "Cognigy",
            "matches": [
              {
                "text": "Cognigy",
                "offset": 0,
                "length": 7
              }
            ],
            "type": "Person"
          },
          {
            "name": "Germany",
            "matches": [
              {
                "text": "Germany",
                "offset": 26,
                "length": 7
              }
            ],
            "wikipediaLanguage": "en",
            "wikipediaId": "Germany",
            "wikipediaUrl": "https://en.wikipedia.org/wiki/Germany",
            "bingId": "75c62d8e-1449-4e4d-b188-d9e88f878dd9",
            "type": "Location"
          }
        ]
      }
    ],
    "errors": []
  }
```
