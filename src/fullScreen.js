function active(element) {
            if (element.requestFullscreen) {
              element.requestFullscreen();
            }
          }
          function deactive() {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            }
          }