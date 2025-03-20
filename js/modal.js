// 모달 열기
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption');
    
    // 모달에 이미지 세팅
    modal.style.display = "block";
    modalImage.src = imageSrc;
    caption.innerHTML = imageSrc.split('/').pop();  // 이미지 파일 이름을 캡션으로 추가
  
    // 이미지 크기 조정 (필요시)
    modalImage.style.maxWidth = "80%";
    modalImage.style.maxHeight = "80%";
  }
  
  // 모달 닫기
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
  }