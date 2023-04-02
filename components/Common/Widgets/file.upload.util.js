const ALLOWED_FORMATS = ["jpeg", "jpg", "png", "pdf"];

const VIDEO_FORMAT_VALID_EXTS = convertArrayToObjectKeys(["mp4", "mkv"]);

function convertArrayToObjectKeys(arr) {
    return arr.reduce((agg, value) => {
        agg[value] = true;
        return agg;
    }, {});
}

function validateUploadedFile(file, validExtensions, maxFileSizeInMb) {
    if (!file) {
        return;
    }
    const name = file.name;
    const messages = [];

    if (maxFileSizeInMb) {
        const maxSize = maxFileSizeInMb * 1024 * 1024;
        if (file.size > maxSize) {
            messages.push(
                `"${name}" can't be more than "${maxFileSizeInMb} MB" of size.`
            );
        }
    }

    if (validExtensions) {
        const extension = name.split(".").pop().toLowerCase();

        if (!validExtensions[extension]) {
            messages.push(`"${extension}" file type is not allowed.`);
        }
    }

    const valid = messages.length === 0;

    if (!valid) {
        alert(messages.join(" and "));
    }

    return valid;
}

function checkVideoExtensionSize(file) {
    if (!file) {
        return true;
    }
    return validateUploadedFile(file, VIDEO_FORMAT_VALID_EXTS, 20);
}

function checFilekExtensionAndSize(file) {
    return validateUploadedFile(
        file,
        convertArrayToObjectKeys(ALLOWED_FORMATS),
        2
    );
}

function validateFileSizeAndExtension(file, allowedExtension, maxSize) {
    return validateUploadedFile(
        file,
        convertArrayToObjectKeys(allowedExtension || ALLOWED_FORMATS),
        maxSize || 2
    );
}

module.exports = {
    checFilekExtensionAndSize,
    checkVideoExtensionSize,
    validateFileSizeAndExtension
};