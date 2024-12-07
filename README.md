Multilingual(Malayalam) Agriculture Prediction Chatbot

The problem statement: Create a Malayalam chatbot that can take both English and Malayalam queries and give response in Malayalam.

Solution: The chatbot is created using a multilingual LLM. The LLM is trained on a  dataset which has 22,615 rows. The data is in English. It has been translated using googletrans library. The translated data has been used in fine tuning the model using PEFT LORA method.

A chatbot is created where you can ask queries related to agriculture information. 

You can ask queries in the input box available in the UI.

The source code contains the backend code for the application which is based on Flask.

The front end is created in Next.js

The model used is llama 3.2 1b instruct model which is finetuned on the dataset 'KisanVaani/agriculture-qa-english-only' from hugging face using datasets library. The model is quantized to 4 bit and the LORA Finetuning is done with the dataset.

pip install datasets

Training a large number of parameters is not feasible as it requires significant memory to store weights, activations, and intermediate computations. Devices with limited memory faces issues while training. As the number of parameters increases, the number of operations also increases which takes long time.

Also the dataset required to train such large models. Vast amounts of training data is required to avoid overfitting and to achieve generalization.

To avoid these we are using Parameter efficient Fine tuning method: LORA
LORA method will train only the parameters which are selected and rest of the parameters will be freezed. An adapter module is created and used over the full model. This allows the model to adapt to new task without changing the main parameter values.
The model is quantized to 4 bit which helps in faster inference, reduced memory usage

The model is used from HuggingFace using transformers library. The model can be used in devices with low computation power.

 pip install transformers

The dataset which was originally in English was converted to Malayalam using library the googletrans.

 pip install googletrans

The finetuned model is converted to gguf format using llama cpp library.
And this gguf model is then quantized to 4bit.

The model size is reduced to 762MB.