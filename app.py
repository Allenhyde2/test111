from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # 다른 도메인(웹사이트)에서 접속 허용

# 1. API 키 설정 (환경 변수 권장)
# 실제 배포 시에는 os.environ.get("GEMINI_API_KEY") 등으로 관리하세요.
genai.configure(api_key="GEMINI_API_KEY")
if not api_key:
        print("Error: GEMINI_API_KEY 환경 변수가 설정되지 않았습니다.")
    else:
        genai.configure(api_key=api_key)

# 2. 모델 설정 (사용자 요청대로 1.5 Pro 설정)
# 만약 1.5 Pro가 안 되면 'gemini-2.0-flash'로 변경하세요.
model = genai.GenerativeModel('gemini-1.5-pro')

@app.route('/', methods=['GET'])
def home():
    return "<h1>Server is Running!</h1><p>챗봇 서버가 정상 작동 중입니다.</p>", 200
    
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_input = data.get('message', '')

        if not user_input:
            return jsonify({"error": "메시지가 비어있습니다."}), 400

        # 3. Gemini에게 질문
        response = model.generate_content(user_input)
        
        # 4. 결과 반환
        return jsonify({"reply": response.text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
