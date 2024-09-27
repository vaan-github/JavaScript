@echo off
setlocal

REM Initialize a flag to track if any condition is satisfied
set CONDITION_MET=0

REM Path to the uninstaller
set UNINSTALLER_PATH="%LOCALAPPDATA%\Programs\Microsoft VS Code\unins000.exe"

REM Execute the uninstaller if it exists
if exist %UNINSTALLER_PATH% (
    echo Running uninstaller...
    start /wait "" %UNINSTALLER_PATH%
    set CONDITION_MET=1
) else (
    echo Uninstaller not found at %UNINSTALLER_PATH%.
)

REM Deleting directories
echo Deleting directories...

if exist "%LOCALAPPDATA%\Programs\Microsoft VS Code" (
    rmdir /s /q "%LOCALAPPDATA%\Programs\Microsoft VS Code"
    echo Deleted %LOCALAPPDATA%\Programs\Microsoft VS Code
    set CONDITION_MET=1
)

if exist "%APPDATA%\Code" (
    rmdir /s /q "%APPDATA%\Code"
    echo Deleted %APPDATA%\Code
    set CONDITION_MET=1
)

if exist "%USERPROFILE%\.vscode" (
    rmdir /s /q "%USERPROFILE%\.vscode"
    echo Deleted %USERPROFILE%\.vscode
    set CONDITION_MET=1
)

REM Check if no condition was met
if "%CONDITION_MET%"=="0" (
    echo No actions were taken. No files or directories were found to delete.
    echo.
)

echo Cleanup completed.

endlocal
pause
