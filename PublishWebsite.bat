::make sure repository is up to date
git pull
::Clean website
call CleanWebsite.bat
::Build website
call BuildWebsite.bat
::Upload
"C:\Program Files (x86)\WinSCP\WinSCP.com" /ini=nul /script=UploadWebsite.txt
pause