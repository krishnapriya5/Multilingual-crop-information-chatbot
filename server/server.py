from flask import Flask, request, jsonify
from flask_cors import CORS
from llama_cpp import Llama

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/ui", methods=["POST"])
def root():
    try:
        # Get the request body
        input_data = request.get_json()
        
        # Extract prompt from the request
        prompt = input_data.get("prompt", "")
        
        # Prepare the input prompt for the Llama model
        input_prompt = """Below is a Human Input, write appropriate Response based on the input.

        ### Input:
        {}

        ### Response:
        {}"""
        
        # Initialize the Llama model
        llm = Llama("./model.gguf", n_gpu_layers=30)
        prompt_llm = input_prompt.format(
            prompt,  # input
            ""       # leave blank for AI-generated response
        )
        
        # Generate response using Llama model
        output = llm(prompt_llm, max_tokens=200, temperature=0)
        out = output['choices'][0]['text']
        
        # Parse the generated response
        generated_text = out
        response = generated_text.split('### Input:')[0].strip()
        
        return jsonify({"response": "response"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8001)