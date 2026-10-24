// AVASC Uygulama Mantığı
let currentLessonIndex = 0;
let loggedInUser = "";

// DOM Elemanları
const authScreen = document.getElementById("auth-screen");
const gameWrapper = document.getElementById("game-wrapper");
const modalScreen = document.getElementById("modal-screen");
const lessonListContainer = document.getElementById("lesson-list-container");
const toastContainer = document.getElementById("toast-container");

const lessonTitleEl = document.getElementById("lesson-title");
const lessonContentEl = document.getElementById("lesson-content");
const codeInputEl = document.getElementById("code-input");
const feedbackBoxEl = document.getElementById("feedback-box");
const usernameDisplayEl = document.getElementById("username-display");
const levelCountEl = document.getElementById("level-count");
const levelBtnIndicator = document.getElementById("level-btn-indicator");

const runBtn = document.getElementById("run-btn");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");
const homeBtn = document.getElementById("home-btn");

// Modern Toast Bildirim Fonksiyonu (Üst üste binmeyi önler)
function showToast(message, type = "success") {
    // Önceki toastları temizle
    toastContainer.innerHTML = "";
    
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Kayıt Ol Formu İşlevi
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById("reg-name").value;
    const password = document.getElementById("reg-password").value;

    if (name.trim() === "" || password.trim() === "") return;

    loggedInUser = name;
    usernameDisplayEl.innerText = loggedInUser;

    authScreen.style.display = "none";
    gameWrapper.style.display = "flex";

    showToast(`Hos geldin, ${loggedInUser}! Maceraya basla 🚀`, "success");
    loadLesson(currentLessonIndex);
}

// Aktif Dersi Ekrana Yükle
function loadLesson(index) {
    const lesson = lessons[index];
    
    // Eğer tüm dersler bittiyse tebrik ekranı
    if (!lesson) {
        lessonTitleEl.innerText = "🏆 TEBRIKLER " + loggedInUser.toUpperCase() + "!";
        lessonContentEl.innerHTML = `
            <p>LESON temel JavaScript modulundeki tum bolumleri basariyla tamamladin! Harika bir is cikardin.</p>
            <div class="section-footer-ai">⚡ Bu site AVASC tarafından değildir.AI tarafından yaratılmıştır.</div>
        `;
        codeInputEl.value = "// Tum bolumler bitti!";
        codeInputEl.disabled = true;
        runBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    codeInputEl.disabled = false;
    runBtn.disabled = false;

    lessonTitleEl.innerText = lesson.title;
    lessonContentEl.innerHTML = lesson.content;
    codeInputEl.value = lesson.initialCode;
    
    feedbackBoxEl.className = "feedback";
    feedbackBoxEl.style.display = "none";
    nextBtn.disabled = true;
    
    levelCountEl.innerText = `${lesson.id} / ${lessons.length}`;
    Prism.highlightAll();
}

// Kodu Katı ve Kesin Kontrol Etme Fonksiyonu
function checkCode() {
    const currentLesson = lessons[currentLessonIndex];
    if (!currentLesson) return;

    const userCode = codeInputEl.value.trim();
    const result = currentLesson.validate(userCode);

    if (result.success) {
        feedbackBoxEl.className = "feedback success-msg";
        feedbackBoxEl.innerText = result.message;
        nextBtn.disabled = false;
        showToast("Harika kod! Siradaki konuya gecebilirsin 🎉", "success");
    } else {
        feedbackBoxEl.className = "feedback error-msg";
        feedbackBoxEl.innerText = result.message;
        showToast("Kodda eksikler veya hatali yazim var!", "error");
        nextBtn.disabled = true;
    }
}

// Bölüm Göstergesine Basıldığında Listeyi Aç
levelBtnIndicator.addEventListener("click", () => {
    lessonListContainer.innerHTML = "";
    lessons.forEach((l, idx) => {
        const item = document.createElement("div");
        item.style.padding = "8px";
        item.style.margin = "4px 0";
        item.style.backgroundColor = idx === currentLessonIndex ? "#313244" : "#181825";
        item.style.borderRadius = "4px";
        item.style.cursor = "pointer";
        item.innerText = `${l.title} ${idx === currentLessonIndex ? "⬅️ (Su an buradasin)" : ""}`;
        
        item.onclick = () => {
            currentLessonIndex = idx;
            loadLesson(currentLessonIndex);
            closeModal();
        };
        lessonListContainer.appendChild(item);
    });
    modalScreen.style.display = "flex";
});

function closeModal() {
    modalScreen.style.display = "none";
}

// Klavyeden Ctrl + S Basıldığında Yakala
document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        if(gameWrapper.style.display === "flex") {
            e.preventDefault();
            checkCode();
        }
    }
});

// Buton Etkinlikleri
runBtn.addEventListener("click", checkCode);

nextBtn.addEventListener("click", () => {
    currentLessonIndex++;
    loadLesson(currentLessonIndex);
});

retryBtn.addEventListener("click", () => {
    loadLesson(currentLessonIndex);
});

homeBtn.addEventListener("click", () => {
    currentLessonIndex = 0;
    loadLesson(currentLessonIndex);
});
