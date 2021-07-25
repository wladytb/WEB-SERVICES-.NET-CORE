 var firebaseConfig = {
    apiKey: "AIzaSyA9J8Siq4EOQ3azPyusoy9E1pacmE4RMgQ",
    authDomain: "minube-698c9.firebaseapp.com",
    projectId: "minube-698c9",
    storageBucket: "minube-698c9.appspot.com",
    messagingSenderId: "995677310862",
    appId: "1:995677310862:web:c7a2cb38f23107d01c9edf",
    measurementId: "G-G7ZZ3WFD08"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function guardarImg(data, name) {
      $(".modalwait").css("display", "flex");
    $("#btn-cancel").attr('disabled', 'disabled');
    $("#btn-save").attr('disabled', 'disabled');
    if (typeof $('#filephoto').prop("files")[0] !== 'undefined') {
        const ref = firebase.storage().ref();
        const file = document.querySelector("#filephoto").files[0];
        const metadata = {contentType: file.type};
        var dt = new Date();
        const task = ref.child('imgProfiles/' +
                name + '-' + (dt.getDate() + '-' + (dt.getMonth() + 1) + '-' +
                        dt.getFullYear()) + '-' + dt.getHours() + ':' +
                dt.getMinutes() + ':' + dt.getSeconds()).put(file, metadata);
        task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
            data.photo = url;
            saveUser(JSON.stringify(data));
        }).catch((error) => {
            console.log(error.message);
            $('#btn-cancel').removeAttr('disabled');
            $('#btn-save').removeAttr('disabled');
            $(".modalwait").css("display", "none");
        });
    } else {
        data.photo = 'https://firebasestorage.googleapis.com/v0/b/minube-698c9.appspot.com/o/imgProfiles%2Fuser-default.png?alt=media&token=3b333817-ee2c-4ae8-b93b-c3e8c34cfb72';
        saveUser(JSON.stringify(data));
    }
}