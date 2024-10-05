// 코드 만든 이 : 진윤 (https://github.com/newhajinyoon/newhajinyoon)


const conversions = {
    "ㅏㅏ": "ㆍ",
    "ㅑㅑ": "ᆢ",
    "ㅁㅅ": "ꥱ",

    "나ㅏ": "ᄂᆞ",
    "다ㅏ": "ᄃᆞ",
    "라ㅏ": "ᄅᆞ",
    "마ㅏ": "ᄆᆞ",
    "바ㅏ": "ᄇᆞ",
    "사ㅏ": "ᄉᆞ",
    "아ㅏ": "ᄋᆞ",
    "자ㅏ": "ᄌᆞ",
    "차ㅏ": "ᄎᆞ",
    "카ㅏ": "ᄏᆞ",
    "타ㅏ": "ᄐᆞ",
    "파ㅏ": "ᄑᆞ",
    "하ㅏ": "ᄒᆞ",
    "까ㅏ": "ᄁᆞ",
    "따ㅏ": "ᄄᆞ",
    "빠ㅏ": "ᄈᆞ",
    "싸ㅏ": "ᄊᆞ",
    "짜ㅏ": "ᄍᆞ"
};

let resultContainer;

const style = document.createElement('style');
style.textContent = `
    .result-container {
        font-family: Arial, sans-serif;
        background-color: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: max-content;
        padding: 5px;
    }
    
    .result-container::before {
        content: "입력될 제주어: ";
        font-size: 12px;
        color: #555;
    }
`;
document.head.appendChild(style);

// 입력 필드에 이벤트 리스너 추가
document.addEventListener("input", function(event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        if (!resultContainer) {
            createResultContainer(event.target);
        }

        const inputText = event.target.value;
        let convertedText = inputText;

        // 변환 로직
        for (const [key, value] of Object.entries(conversions)) {
            const regex = new RegExp(key, "g");
            convertedText = convertedText.replace(regex, value);
        }

        // 마지막 띄어쓰기 위치 찾기
        const lastSpaceIndex = inputText.lastIndexOf(' ');

        // 미리보기 텍스트 설정
        let previewText = '';
        if (lastSpaceIndex !== -1) {
            const inputAfterLastSpace = inputText.slice(lastSpaceIndex + 1);
            const convertedAfterLastSpace = convertedText.slice(lastSpaceIndex + 1);
            previewText = convertedAfterLastSpace;
        } else {
            previewText = convertedText; 
        }


        if (convertedText !== inputText) {
            resultContainer.style.display = "block";
            resultContainer.textContent = previewText;
        } else if (resultContainer) {
            resultContainer.style.display = "none"; 
        }
    }
});

// 입력 필드에서 엔터 키 이벤트 리스너 추가
document.addEventListener("keydown", function(event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        if (event.key === "Enter") {
            const inputText = event.target.value;
            let convertedText = inputText;

            // 변환 로직
            for (const [key, value] of Object.entries(conversions)) {
                const regex = new RegExp(key, "g");
                convertedText = convertedText.replace(regex, value);
            }

            event.target.value = convertedText; 
            if (resultContainer) {
                resultContainer.style.display = "none"; 
            }

            // 기본 엔터 동작(줄바꿈) 허용
            event.preventDefault();
            const start = event.target.selectionStart;
            const end = event.target.selectionEnd;
            event.target.value = `${event.target.value.substring(0, start)}\n${event.target.value.substring(end)}`;
            event.target.selectionStart = event.target.selectionEnd = start + 1; 
        } else if (event.key === " ") {
            const inputText = event.target.value;
            let convertedText = inputText;

            // 변환 로직
            for (const [key, value] of Object.entries(conversions)) {
                const regex = new RegExp(key, "g");
                convertedText = convertedText.replace(regex, value);
            }

            event.target.value = convertedText; 
            if (resultContainer) {
                resultContainer.style.display = "none"; 
            }
        }
    }
});

// 입력이 끝나면 결과 숨김
document.addEventListener("focusout", function(event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        if (resultContainer) {
            resultContainer.style.display = "none"; 
        }
    }
});

// 결과 컨테이너 생성
function createResultContainer(inputElement) {
    resultContainer = document.createElement("div");
    resultContainer.className = "result-container";
    document.body.appendChild(resultContainer);

    const inputRect = inputElement.getBoundingClientRect();
    resultContainer.style.position = "absolute";
    resultContainer.style.top = `${inputRect.bottom + window.scrollY}px`;
    resultContainer.style.left = `${inputRect.left}px`;
    resultContainer.style.zIndex = "10000"; 
    resultContainer.style.backgroundColor = "white";
    resultContainer.style.border = "1px solid #ccc";
    resultContainer.style.padding = "5px";
}
