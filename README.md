# Coastal Engineering & Resilience Lab — 網站原始檔

國立臺灣海洋大學 河海工程學系 黃偉柏教授研究室網站。純 HTML / CSS / JavaScript，不需要任何編譯工具，直接放到 GitHub Pages 即可上線。

## 檔案結構

所有檔案都放在 repository 根目錄（同一層），沒有子資料夾：

```
index.html            主頁（所有內容都在這一頁，用錨點切換區塊）
style.css             版面與配色
main.js               語言切換、地圖互動、計畫篩選、論文列表
projects.js           研究計畫清單  ← 新增計畫改這裡
publications.js       論文清單      ← 新增論文改這裡
sites.js              地圖場址說明  ← 地圖點選後顯示的文字
*.webp                圖片
*.mp4                 水槽與颱風模擬短片（無聲循環）
```

新增圖片時，直接上傳到根目錄，在 index.html 裡用檔名引用即可（例如 `src="new-photo.webp"`）。

## 上線步驟（GitHub Pages）

1. 在 GitHub 建立新的 repository（例如 `huang-coastal-lab`），設為 Public。
2. 把這個資料夾裡的**所有檔案**上傳到 repository 根目錄。
   - 網頁上傳：repository 頁面 → **Add file → Upload files** → 選取全部檔案拖進去 → Commit。
   - 或用 git：
     ```bash
     git init
     git add .
     git commit -m "Lab website"
     git branch -M main
     git remote add origin https://github.com/<帳號>/<repo>.git
     git push -u origin main
     ```
3. repository → **Settings → Pages** → Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾 `/ (root)` → Save。
4. 約 1–2 分鐘後網址會出現在同一頁：`https://<帳號>.github.io/<repo>/`
5. （選用）要用自己的網域，在同一頁的 **Custom domain** 填入，並依 GitHub 說明設定 DNS。

## 常見修改

**新增一篇論文**：打開 `publications.js`，複製一筆 `{ ... },` 貼在最上面並修改內容。`group: "recent"` 會出現在近年論文，`"earlier"` 出現在代表性早期論文。`Huang, W.-P.` 會自動加粗。

**新增一個計畫**：打開 `projects.js`，複製一筆貼上修改。`type` 填 `"nstc"`（國科會）或 `"agency"`（委託計畫）；`region` 填地區代碼（hsinchu、taoyuan、yilan、hualien、taitung、green、kinmen、keelung、national）。網頁會自動依日期排序、自動更新首頁的計畫數量。

**修改地圖場址的說明**：`sites.js`。

**修改研究室名稱**：在 `index.html` 搜尋 `Coastal Engineering &amp; Resilience Lab` 與 `海岸工程與防災研究室` 全部取代；`main.js` 最上方的 `TITLES` 也要一起改（這是瀏覽器分頁標題）。

**中英文**：每段文字都有兩個版本，`data-l="en"` 是英文、`data-l="zh"` 是中文，修改時兩邊都要改。

在 GitHub 網頁上也可以直接編輯：點開檔案 → 右上角鉛筆圖示 → 修改 → Commit changes，約 1 分鐘後網站會自動更新。

## 本機預覽

直接雙擊 `index.html` 就能在瀏覽器開啟。

## 上線前建議確認

- 研究室英文／中文名稱（目前暫定 Coastal Engineering & Resilience Lab／海岸工程與防災研究室）
- 「Join the lab／加入研究室」段落的招生說明
- 若有研究生名單、Google Scholar、ORCID 或國科會研究人才網頁連結，可再加入
- 部分計畫名稱的英文為翻譯，建議教授過目

地圖海岸線資料：Natural Earth（公有領域）。
