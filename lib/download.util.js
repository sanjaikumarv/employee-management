import Download from "downloadjs";

function CapitalToNormal(str) {
    if (!str) {
        return null;
    }
    const toSmall = str.toLowerCase();
    return toSmall.charAt(0).toUpperCase() + toSmall.slice(1);
}

function getName(obj) {
    if (!obj) {
        return;
    }
    const { firstName, lastName } = obj;
    const names = [];
    if (firstName) {
        names.push(firstName);
    }
    if (lastName) {
        names.push(lastName);
    }
    return names.join(" ");
}

function getDownloadFileName(response, defaultFileName) {
    var filename = defaultFileName ? defaultFileName : "";
    var disposition = response.headers.get("content-disposition");
    if (disposition && disposition.indexOf("attachment") !== -1) {
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, "");
        }
    }
    return filename;
}

function downloadDocument(url, failureHandler, defaultFileName) {
    fetch(url, {
        method: "GET",
        headers: {}
    })
        .then(response => {
            if (response.status === 200) {
                return Promise.all([
                    response.blob(),
                    getDownloadFileName(response, defaultFileName)
                ]);
            } else {
                throw Error(response.statusText);
            }
        })
        .then(([blob, filename]) => {
            Download(blob, filename);
        })
        .catch(error => {
            failureHandler(error.toString());
        });
}

export { CapitalToNormal, getName, downloadDocument };