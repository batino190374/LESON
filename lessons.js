// AVASC 20 Bölümlük JavaScript Eğitim Seti
const lessons = [
    {
        id: 1,
        title: "1. Bolum: Degisken Tanimlama (let)",
        content: `
            <p><strong>Hos geldin Coder!</strong> AVASC platformundaki ilk gorevine hazir misin?</p><br>
            <p>JavaScript'te verileri saklamak icin degiskenler kullaniriz. Degeri sonradan degisebilen bir degisken olusturmak icin <code>let</code> kelimesini kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let username = "kodcu";</code></pre><br>
            <p><strong>Gorev:</strong> <code>let</code> kullanarak bir degisken tanimla ve kaydet (Ctrl + S).</p>
        `,
        initialCode: "// let ile bir degisken tanimla:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("let") && (userCode.includes('"') || userCode.includes("'")),
                message: "Harika! Degiskeni fistik gibi tanimladin. 🎉"
            };
        }
    },
    {
        id: 2,
        title: "2. Bolum: Sabit Degiskenler (const)",
        content: `
            <p>Degerinin asla degismesini istemedigimiz durumlarda <code>const</code> kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">const pi = 3.14;</code></pre><br>
            <p><strong>Gorev:</strong> <code>const</code> kullanarak bir sabit tanimla.</p>
        `,
        initialCode: "// const kullanarak bir sabit tanimla:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("const"),
                message: "Mukemmel! const kullanimi tam oturdu. 🔥"
            };
        }
    },
    {
        id: 3,
        title: "3. Bolum: Metin Verileri (String)",
        content: `
            <p>Yazilari ifade etmek icin tirnak isaretleri <code>""</code> veya <code>''</code> kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let mesaj = "Merhaba Dunya";</code></pre><br>
            <p><strong>Gorev:</strong> Metin turunde bir degisken olustur.</p>
        `,
        initialCode: "// Metin (string) degiskeni tanimla:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("let") && (userCode.includes('"') || userCode.includes("'")),
                message: "Super! Metin verisini basariyla olusturdun. 👏"
            };
        }
    },
    {
        id: 4,
        title: "4. Bolum: Sayisal Veriler (Number)",
        content: `
            <p>Matematiksel islemler ve sayilar icin tirnak kullanmadan dogrudan sayi yazariz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let puan = 100;</code></pre><br>
            <p><strong>Gorev:</strong> Sayisal bir degisken tanimla.</p>
        `,
        initialCode: "// Sayisal bir degisken tanimla:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("let") && /\d/.test(userCode),
                message: "Harika! Sayisal veri tanimi basarili. 🎯"
            };
        }
    },
    {
        id: 5,
        title: "5. Bolum: Mantiksal Degerler (Boolean)",
        content: `
            <p>Kosullar icin sadece iki durum vardir: <code>true</code> (dogru) veya <code>false</code> (yanlis).</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let isActive = true;</code></pre><br>
            <p><strong>Gorev:</strong> <code>true</code> veya <code>false</code> alan bir degisken tanimla.</p>
        `,
        initialCode: "// Boolean (true/false) degisken tanimla:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("true") || userCode.includes("false"),
                message: "Tebrikler! Boolean mantigi anlasildi. ⚡"
            };
        }
    },
    {
        id: 6,
        title: "6. Bolum: Temel Matematiksel Islemler",
        content: `
            <p>JavaScript ile toplama (<code>+</code>), cikarma (<code>-</code>), carpma (<code>*</code>) ve bolme (<code>/</code>) yapabiliriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let toplam = 10 + 20;</code></pre><br>
            <p><strong>Gorev:</strong> Iki sayiyi toplayan bir islem yaz.</p>
        `,
        initialCode: "// Matematiksel toplama islemi yap:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("+"),
                message: "Matematigin kuvveti adina, harika! ➕"
            };
        }
    },
    {
        id: 7,
        title: "7. Bolum: Konsola Yazdirma (console.log)",
        content: `
            <p>Yazdigimiz kodlarin sonucunu gormek icin <code>console.log()</code> komutunu kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">console.log("Selam Coder");</code></pre><br>
            <p><strong>Gorev:</strong> Konsola bir mesaj yazdir.</p>
        `,
        initialCode: "// console.log kullan:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("console.log"),
                message: "Konsol yankilaniyor! Mukemmel. 🖥️"
            };
        }
    },
    {
        id: 8,
        title: "8. Bolum: Kosul Yapilari (if / else)",
        content: `
            <p>Kodun belirli bir sarta gore calismasini istiyorsak <code>if</code> bloklarini kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">if (puan > 50) { console.log("Gectin"); }</code></pre><br>
            <p><strong>Gorev:</strong> Bir <code>if</code> kosulu yaz.</p>
        `,
        initialCode: "// if kosulu yaz:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("if"),
                message: "Kosul mantigi kafaya yatti! 🔀"
            };
        }
    },
    {
        id: 9,
        title: "9. Bolum: Diziler (Arrays)",
        content: `
            <p>Birden fazla veriyi tek bir degiskende saklamak icin koseli parantez <code>[]</code> ile diziler olustururuz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let meyveler = ["elma", "armut", "muz"];</code></pre><br>
            <p><strong>Gorev:</strong> Icinde bircok eleman olan bir dizi tanimla.</p>
        `,
        initialCode: "// Dizi (array) tanimla:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("[") && userCode.includes("]"),
                message: "Diziler kontrol altinda! 📦"
            };
        }
    },
    {
        id: 10,
        title: "10. Bolum: Dizi Elemanlarina Erisnek",
        content: `
            <p>Dizilerdeki elemanlar 0'dan baslayan indeks numaralariyla cagirilir (Orn: <code>meyveler[0]</code>).</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let ilkMeyve = meyveler[0];</code></pre><br>
            <p><strong>Gorev:</strong> Diziden belirli bir indeksteki elemani cagir.</p>
        `,
        initialCode: "// Dizi elemanina indeks ile eris:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("[") && userCode.includes("]"),
                message: "Tebrikler, yari yolu devirdin! 🚀"
            };
        }
    },
    {
        id: 11,
        title: "11. Bolum: Nesneler (Objects)",
        content: `
            <p>Gercek hayattaki nesneleri kodda temsil etmek icin suslu parantez <code>{}</code> ile ozellikler tanimlariz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let araba = { marka: "Tesla", yil: 2026 };</code></pre><br>
            <p><strong>Gorev:</strong> Bir nesne (object) tanimla.</p>
        `,
        initialCode: "// Nesne tanimla:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("{") && userCode.includes("}"),
                message: "Nesne yapisi basariyla kuruldu! 🧩"
            };
        }
    },
    {
        id: 12,
        title: "12. Bolum: Fonksiyonlar (Function)",
        content: `
            <p>Tekrar eden kodlari tek bir cati altinda toplamak icin <code>function</code> kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">function selamla() { console.log("Merhaba"); }</code></pre><br>
            <p><strong>Gorev:</strong> Basit bir fonksiyon tanimla.</p>
        `,
        initialCode: "// function tanimla:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("function"),
                message: "Fonksiyon motoru calisti! ⚙️"
            };
        }
    },
    {
        id: 13,
        title: "13. Bolum: Parametreli Fonksiyonlar",
        content: `
            <p>Fonksiyonlarin disaridan veri almasini saglamak icin parantez icine parametre yazariz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">function topla(a, b) { return a + b; }</code></pre><br>
            <p><strong>Gorev:</strong> Parametre alan bir fonksiyon yaz.</p>
        `,
        initialCode: "// Parametreli fonksiyon yaz:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("function") && userCode.includes("("),
                message: "Parametreler basariyla islendi! 🎯"
            };
        }
    },
    {
        id: 14,
        title: "14. Bolum: Donguler (For Dongusu)",
        content: `
            <p>Ayni islemi defalarca tekrarlamak icin <code>for</code> dongusunu kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">for(let i = 0; i < 5; i++) { console.log(i); }</code></pre><br>
            <p><strong>Gorev:</strong> Bir <code>for</code> dongusu kur.</p>
        `,
        initialCode: "// for dongusu yaz:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("for"),
                message: "Dongu sarklari donuyor! 🔄"
            };
        }
    },
    {
        id: 15,
        title: "15. Bolum: While Dongusu",
        content: `
            <p>Belirli bir sart saglandigi surece donmeye devam eden yapiya <code>while</code> denir.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let sayi = 0; while(sayi < 3) { sayi++; }</code></pre><br>
            <p><strong>Gorev:</strong> Bir <code>while</code> dongusu yaz.</p>
        `,
        initialCode: "// while dongusu yaz:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("while"),
                message: "While dongusu tam oturdu! ⏱️"
            };
        }
    },
    {
        id: 16,
        title: "16. Bolum: Dizi Metotlari (push)",
        content: `
            <p>Bir diziye sonradan yeni eleman eklemek icin <code>push()</code> metodunu kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let liste = [1, 2]; liste.push(3);</code></pre><br>
            <p><strong>Gorev:</strong> Diziye <code>push</code> ile eleman ekle.</p>
        `,
        initialCode: "// push metodu kullan:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("push"),
                message: "Eleman basariyla eklendi! 📥"
            };
        }
    },
    {
        id: 17,
        title: "17. Bolum: Metin Uzunlugu (length)",
        content: `
            <p>Bir metnin veya dizinin icinde kac karakter oldugunu ogrenmek icin <code>.length</code> ozelligini kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let uzunluk = "AVASC".length;</code></pre><br>
            <p><strong>Gorev:</strong> <code>.length</code> kullanarak bir metnin uzunlugunu olc.</p>
        `,
        initialCode: "// .length ozelligini kullan:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("length"),
                message: "Metin uzunlugu basariyla olculdu! 📏"
            };
        }
    },
    {
        id: 18,
        title: "18. Bolum: Metin Birlestirme",
        content: `
            <p>Iki veya daha fazla metni birbirine eklemek icin toplama <code>+</code> operatorunu kullanabiliriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let tamIsim = "Java" + "Script";</code></pre><br>
            <p><strong>Gorev:</strong> Iki metni <code>+</code> ile birlestir.</p>
        `,
        initialCode: "// Metinleri birlestir:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("+") && (userCode.includes('"') || userCode.includes("'")),
                message: "Metinler birbirine kenetlendi! 🔗"
            };
        }
    },
    {
        id: 19,
        title: "19. Bolum: DOM ile Eleman Secme",
        content: `
            <p>Web sayfasindaki HTML elementlerine JavaScript ile ulasmak icin <code>document.getElementById()</code> kullaniriz.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let baslik = document.getElementById("title");</code></pre><br>
            <p><strong>Gorev:</strong> <code>document.getElementById</code> ile bir element sec.</p>
        `,
        initialCode: "// document.getElementById kullan:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("document.getElementById"),
                message: "DOM elementine ulasildi! 🌐"
            };
        }
    },
    {
        id: 20,
        title: "20. Bolum: Final - LESON Uzmani",
        content: `
            <p>Tebrikler Coder! Son gorevdesin. JavaScript'te degisken tanimlamanin en temel yolunu tekrarla ve bu platformu bitir.</p><br>
            <p><strong>Ornek Kullanim:</strong></p>
            <pre><code class="language-javascript">let bitis = "Tamamlandi";</code></pre><br>
            <p><strong>Gorev:</strong> Final degiskenini tanimla ve AVASC egitimini tamamla!</p>
        `,
        initialCode: "// Son degiskeni tanimla ve bitir:\n",
        validate: function(userCode) {
            return {
                success: userCode.includes("let"),
                message: "MUTLUSON! Tum 20 bolumu basariyla bitirdin! 🏆🔥"
            };
        }
    }
];
