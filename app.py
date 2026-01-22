from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

app = Flask(__name__)
# 모든 도메인에서의 요청 허용 (CORS 해결)
CORS(app, resources={r"/*": {"origins": "*"}})

# 1. API 키 설정 (Render 환경변수에서 가져옴)
api_key = os.environ.get("GEMINI_API_KEY")

if not api_key:
    # 로컬 테스트용: 환경변수가 없으면 직접 입력한 키 사용 (배포시엔 환경변수 권장)
    # print("환경변수 키가 없어 하드코딩된 키를 사용합니다.")
    # api_key = "여기에_API_키를_직접_넣으셔도_됩니다" 
    print("Error: GEMINI_API_KEY가 설정되지 않았습니다.")
else:
    genai.configure(api_key=api_key)

# 2. 모델 설정 (사용자 요청: 고성능 1.5 Pro 버전)
# 주의: 이 모델을 쓰려면 구글 클라우드 프로젝트에 결제 카드가 등록되어 있어야 할 수 있습니다.
model = genai.GenerativeModel('gemini-1.5-pro')

# 현관문 (서버 상태 확인용)
@app.route('/', methods=['GET'])
def home():
    return "<h1>Gemini 1.5 Pro Server is Running</h1>", 200

# 챗봇 뒷문
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_input = data.get('message', '')

        if not user_input:
            return jsonify({"error": "메시지가 비어있습니다."}), 400

        # Gemini 1.5 Pro에게 질문
        response = model.generate_content(user_input)
        
        return jsonify({"reply": response.text})

    except Exception as e:
        print(f"Error 발생: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
