# 제주어 입력기 (Jeju Language Input Tool)

제주어 입력기 사용을 환영합니다! 이 도구는 텍스트 필드에 제주어 문자를 쉽게 입력할 수 있도록 도와줍니다. 이 튜토리얼을 따라 설정 및 사용 방법을 배워보세요.

## 목차
1. [소개](#소개)
2. [내 웹페이지에 설정하기](#내-웹페이지에-설정하기)
3. [제주어 입력기 사용법](#제주어-입력기-사용법)
4. [출처 명시](#출처-명시)

## 소개
제주어 입력기는 제주어 문자를 입력할 수 있는 간편한 도구입니다. 웹페이지에 간단히 추가하여 제주어를 입력해보세요.

## 내 웹페이지에 설정하기
아래 스크립트를 복사하여 사용하고자 하는 웹페이지의 `<head>` 섹션에 붙여넣으세요:
```html
<script src="https://rawcdn.githack.com/newhajinyoon/web-jeju-typer/2d5d8da7a3522c438882d7ab18fd24856ab25d02/jejutyper.js"></script>
```

## 제주어 입력기 사용법
제주어 입력기를 사용하려면 다음과 같은 규칙을 따르세요:

1. 자음 + "ㅏㅏ" (ㅏ 두 번)을 입력할 시 아래아(ㆍ)가 입력됩니다.
2. 자음 + "ㅑㅑ" (ㅑ 두 번)을 입력할 시 쌍아래아(ᆢ)가 입력됩니다.
3. 종성 입력 차례일 때 "ㅁㅅ"을 입력하면 "ꥱ"를 종성으로 사용할 수 있습니다. (초성으로는 사용하지 못합니다.)

제주 특별 문자가 감지되었을 때, 현재 입력 중인 칸에 제주어 입력 미리보기가 나타나고, 띄어쓰기나 줄바꿈을 해야 자동으로 입력됩니다.

## 출처 명시
별다른 제약 없이 출처만 명시하면 자유롭게 사용이 가능합니다:
[출처](https://github.com/newhajinyoon)
