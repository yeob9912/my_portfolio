$src1 = "C:\Users\CLB\.gemini\antigravity\brain\d84a2b87-e63f-4a83-bf1b-42edba0d054e\media__1785307281354.png"
$src2 = "C:\Users\CLB\.gemini\antigravity\brain\d84a2b87-e63f-4a83-bf1b-42edba0d054e\media__1785307488118.png"
$src3 = "C:\Users\CLB\.gemini\antigravity\brain\d84a2b87-e63f-4a83-bf1b-42edba0d054e\media__1785307664154.png"

$dst1 = "c:\Users\CLB\Desktop\my_portfolio\public\pharmacy_locator.png"
$dst2 = "c:\Users\CLB\Desktop\my_portfolio\public\student_complaint.png"
$dst3 = "c:\Users\CLB\Desktop\my_portfolio\public\chatbot_astu.png"

[System.IO.File]::Copy($src1, $dst1, $true)
[System.IO.File]::Copy($src2, $dst2, $true)
[System.IO.File]::Copy($src3, $dst3, $true)

Write-Host "All 3 images copied successfully"
