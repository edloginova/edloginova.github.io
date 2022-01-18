---
title: "Papers"
permalink: /papers/
order: 4
---

### <i class="fa fa-angle-double-right"></i> Towards the application of calibrated Transformers to the unsupervised estimation of question difficulty from text

*Loginova, Ekaterina, et al. “Towards the Application of Calibrated Transformers to the Unsupervised Estimation of Question Difficulty from Text.” Proceedings of the International Conference on Recent Advances in Natural Language Processing (RANLP 2021), edited by Ruslan Mitkov and Galia Angelova, INCOMA, 2021, pp. 846–55.*


[[paper]](https://aclanthology.org/2021.ranlp-1.97/)

Being able to accurately perform Question Difficulty Estimation (QDE) can improve the accuracy of students’ assessment and better their learning experience. Traditional approaches to QDE are either subjective or introduce a long delay before new questions can be used to assess students. Thus, recent work proposed machine learning-based approaches to overcome these limitations. They use questions of known difficulty to train models capable of inferring the difficulty of questions from their text. Once trained, they can be used to perform QDE of newly created questions. Existing approaches employ supervised models which are domain-dependent and require a large dataset of questions of known difficulty for training. Therefore, they cannot be used if such a dataset is not available ( for new courses on an e-learning platform). In this work, we experiment with the possibility of performing QDE from text in an unsupervised manner. Specifically, we use the uncertainty of calibrated question answering models as a proxy of human-perceived difficulty. Our experiments show promising results, suggesting that model uncertainty could be successfully leveraged to perform QDE from text, reducing both costs and elapsed time.

### <i class="fa fa-angle-double-right"></i> Embedding Navigation Patterns for Student Performance Prediction

*Loginova, Ekaterina, and Dries Benoit. “Embedding Navigation Patterns for Student Performance Prediction.” Proceedings of The 14th International Conference on Educational Data Mining (EDM 2021), edited by I-Han Hsiao et al., Educational Data Mining Society, 2021, pp. 391–99.*

[[presentation & paper]](https://educationaldatamining.org/EDM2021/virtual/poster_paper17.html)

Predicting academic performance using trace data from learning management systems is a primary research topic in educational data mining. An important application is the identification of students at risk of failing the course or dropping out.However, most approaches utilise past grades, which are not always available and capture little of the student's learning strategy. The end-to-end models we implement predict whether a student will pass a course using only navigational patterns in a multimedia system, with the advantage of not requiring past grades.In experiments on a dataset containing coarse-grained action logs of more than 100,000 students participating in hundreds of short courses, we show that features extracted with recurrent neural networks outperform the traditional manually engineered ones.We propose two approaches to improve the performance further: a novel encoding scheme for trace data, which reflects the course structure while remaining flexible enough to accommodate previously unseen courses, and unsupervised embeddings obtained with an autoencoder. To provide insight into model behaviour, we incorporate attention mechanism. Clustering the vector representations of student behaviour that are produced by the proposed methods shows that distinct learning strategies specific to low- and high- achievers are extracted.

### <i class="fa fa-angle-double-right"></i> Forecasting directional bitcoin price returns using aspect-based sentiment analysis on online text data

*Loginova, Ekaterina, et al. “Forecasting Directional Bitcoin Price Returns Using Aspect-Based Sentiment Analysis on Online Text Data.” MACHINE LEARNING, 2021, doi:10.1007/s10994-021-06095-3.*

[[pdf]](https://link.springer.com/article/10.1007/s10994-021-06095-3)

### <i class="fa fa-angle-double-right"></i> A Graph-Based Approach for Learner-Tailored Teaching of Korean Grammar Constructions 
*Akimov, Mikhail, Ekaterina Loginova, and Maxim Musin. 2018 IEEE International Conference on Data Mining Workshops (ICDMW). IEEE, 2018.*

[[pdf]](https://ieeexplore.ieee.org/document/8637395) • [[presentation]](http://bit.ly/2Yhk3xa)

Foreign language learning on an intermediate level is often a complicated task, as it requires acquisition not only of vocabulary and language rules but of context-dependent meanings of words. This is especially relevant for Category IV languages like Korean, in which the same tokens could be both words and grammar tags. The textbook adapted versions of words and contexts often fail to capture the existing complexity , while the real world examples may be too hard for a novice and even an intermediate level learner. In addition, the particular learner may be familiar with some functions and contexts for a particular word, but not with the other ones. To alleviate this complexity problem, we propose a semantic graph based personalized tutoring system. The learning corpus is constructed using real-world sentences from a newspaper, which are translated using an automated service and processed with NLP techniques to extract token functions. A graph is used to track word and grammar construct context and thus find similar and dissimilar word use cases, as well as for the estimation of sentence complexity. The system then shows words and grammar constructs from real-world sentences to learners and records their understanding in each context. The collected context dependent understanding data together with the sentence complexity estimation are then used to estimate the learner's level and tailor the sentence set accordingly. The resultant approach could be extended to the tutoring of context-dependent meanings in other languages.

### <i class="fa fa-angle-double-right"></i> An Interactive Web-Interface for Visualizing the Inner Workings of the Question Answering LSTM
*Loginova, Ekaterina, and Günter Neumann. Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing: System Demonstrations. 2018.*

[[pdf]](http://aclweb.org/anthology/D18-2006)

Deep learning models for NLP are potent but not readily interpretable. It prevents researchers from improving a model’s performance efficiently and users from applying it for a task which requires a high level of trust in the system. We present a visualisation tool which aims to illuminate the inner workings of a specific LSTM model for question answering. It plots heatmaps of neurons’ firings and allows a user to check the dependency between neurons and manual features. The system possesses an interactive web-interface and can be adapted to other models and domains.

### <i class="fa fa-angle-double-right"></i> Towards Multilingual Neural Question Answering
*Loginova, Ekaterina, Stalin Varanasi, and Günter Neumann. European Conference on Advances in Databases and Information Systems. Springer, Cham, 2018.*

[[pdf]](https://pdfs.semanticscholar.org/7901/d6a94751251eb959d0ac665e0cb28ed016d9.pdf)

Cross-lingual and multilingual question answering is a critical part of a successful and accessible natural language interface. However, many current solutions are unsatisfactory. We believe that recent developments in deep learning approaches are likely to be efficient for question answering tasks spanning several languages. This work aims to discuss current achievements and remaining challenges. We outline requirements and suggestions for practical parallel data collection and describe existing methods and datasets. We also demonstrate that a simple translation of texts can be inadequate in case of Arabic, English and German languages (on InsuranceQA and SemEval datasets), and thus more sophisticated models are required. We hope that our findings will ignite interest in neural approaches to multilingual question answering.

### <i class="fa fa-angle-double-right"></i> Code-Mixed Question Answering Challenge: Crowd-sourcing Data and Techniques
*Chandu, Khyathi, Ekaterina Loginova, Vishal Gupta, Josef van Genabith, Günter Neuman, Manoj Chinnakotla, Eric Nyberg, and Alan W. Black. Proceedings of the Third Workshop on Computational Approaches to Linguistic Code-Switching. 2018.*

[[pdf]](http://aclweb.org/anthology/W18-3204)

Code-Mixing (CM) is the phenomenon of alternating between two or more languages which is prevalent in bi- and multi-lingual communities. Most NLP applications today are still designed with the assumption of a single interaction language and are most likely to break given a CM utterance with multiple languages mixed at a morphological, phrase or sentence level. For example, popular commercial search engines do not yet fully understand the intents expressed in CM queries. As a first step towards fostering research which supports CM in NLP applications, we systematically crowd-sourced and curated an evaluation dataset for factoid question answering in three CM languages - Hinglish (Hindi+English), Tenglish (Telugu+English) and Tamlish (Tamil+English) which belong to two language families. We share the details of our data collection process, techniques which were used to avoid inducing lexical bias amongst the crowd workers and other CM specific linguistic properties of the dataset. Our final dataset, which is available freely for research purposes, has 1,694 Hinglish, 2,848 Tamlish and 1,391 Tenglish factoid questions and their answers. We discuss the techniques used by the participants for the first edition of this ongoing challenge.