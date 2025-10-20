// function to reset and load layout from console
function resetLay() {
        if (typeof applyDefault === 'function' && typeof savePos === 'function') {
            localStorage.removeItem("picoBtnPos"); // Uses the specific storage key
            applyDefault();
            savePos();
            showToast("Layout reset to default via console.");
            console.log("Layout reset to default.");
        } else {
            console.error("Required functions (applyDefault, savePos) are not available.");
        }
    }

    function loadLay() {
        if (typeof loadFromFile === 'function') {
            loadFromFile();
            showToast("Opening file dialog via console.");
            console.log("Opening file dialog to load layout.");
        } else {
            console.error("Required function (loadFromFile) is not available.");
        }
    }

    window.resetLay = resetLay;
    window.loadLay = loadLay;