document.addEventListener('DOMContentLoaded', () => {
    const startCameraBtn = document.getElementById('start-camera-btn');
    const recordBtn = document.getElementById('record-btn');
    const stopBtn = document.getElementById('stop-btn');
    const userVideo = document.getElementById('user-video');
    const status = document.getElementById('recording-status');
    const downloadArea = document.getElementById('download-area');
    let mediaRecorder;
    let recordedChunks = [];
    let stream;

    startCameraBtn.addEventListener('click', async () => {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            userVideo.srcObject = stream;
            startCameraBtn.disabled = true;
            recordBtn.disabled = false;
            status.textContent = 'Kamera siap!';
            status.style.color = '#5cb85c';
        } catch (error) {
            console.error("Error accessing media devices.", error);
            status.textContent = 'Gagal mengakses kamera. Mohon berikan izin.';
        }
    });

    recordBtn.addEventListener('click', () => {
        if (stream) {
            recordedChunks = [];
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };

            mediaRecorder.onstart = () => {
                status.textContent = 'Sedang Merekam...';
                recordBtn.disabled = true;
                stopBtn.disabled = false;
                downloadArea.innerHTML = '';
            };

            mediaRecorder.onstop = () => {
                status.textContent = 'Perekaman Selesai!';
                const blob = new Blob(recordedChunks, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = `rekaman-${new Date().getTime()}.webm`;
                a.textContent = 'Unduh Video';
                downloadArea.appendChild(a);

                recordBtn.disabled = false;
                stopBtn.disabled = true;
            };

            mediaRecorder.start();
        }
    });

    stopBtn.addEventListener('click', () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }
    });
});