const uploadImageAsPromise = (files)=>{
    return new Promise(function (resolve, reject) {
        var storageRef = ref(storage, `/files/${files.name}`);

        //Upload file
        const uploadTask = uploadBytesResumable(storageRef, files);

        //Update progress bar
        upLoadTask.on('state_changed',
             (snapshot)=>{
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                uploader.value = percentage;
            },
            function error(err){

            },
            function complete(){
                var downloadURL = task.snapshot.downloadURL;
            }
        );
    });
}