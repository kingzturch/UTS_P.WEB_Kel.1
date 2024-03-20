document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('tetris');
    const context = canvas.getContext('2d');

    // Ukuran kotak
    const ROW = 20;
    const COL = 10;
    const SQ = 20; // Ukuran satu kotak

    // Membuat grid game
    let board = [];
    for (let r = 0; r < ROW; r++) {
        board[r] = [];
        for (let c = 0; c < COL; c++) {
            board[r][c] = 'white'; // Warna default untuk kotak kosong
        }
    }

    // Fungsi untuk menggambar kotak
    function drawSquare(x, y, color) {
        context.fillStyle = color;
        context.fillRect(x * SQ, y * SQ, SQ, SQ);

        context.strokeStyle = 'black';
        context.strokeRect(x * SQ, y * SQ, SQ, SQ);
    }

    // Menggambar papan game
    function drawBoard() {
        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
                drawSquare(c, r, board[r][c]);
            }
        }
    }

    // Memulai permainan
    function startGame() {
        drawBoard();
    }

    // Memulai permainan setelah halaman dimuat
    startGame();
});
