// Initialize Cloud Firestore through Firebase
/*firebase.initializeApp({
    apiKey: "AIzaSyBv4DIYk042Tc3x079VQeZsbfneR3CFd2Y",
    authDomain: "to-do-list-2d779.firebaseapp.com",
    projectId: "to-do-list-2d779",
});*/
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
var numeroTarea;

inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value;
    if (userEnteredValue.trim() != 0) {
      addBtn.classList.add("active");
    } else {
      addBtn.classList.remove("active");
    }
}
// Ingresar datos
var db = firebase.firestore();

addBtn.onclick = () => {
    //var tareaR = document.getElementById('tarea').value;
    //console.log(tareaR)
    var userEnteredValue = inputBox.value;

    db.collection("Lista de tareas").add({
        tarea: userEnteredValue,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    addBtn.classList.remove("active");
    inputBox.value = ""
}

// Leer datos
var lista=document.getElementById('todolist');
db.collection("Lista de tareas").onSnapshot((querySnapshot) => {
    lista.innerHTML='';
    var count=0
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().tarea}`);
        todoList.innerHTML += `<li>${doc.data().tarea}<span class="icon" ><i class="bi bi-trash-fill" id="icon" onclick="deleteTask('${doc.id}')">
        </i><i class="bi bi-pencil-fill" id="icon" onclick="showEditTask('${doc.id}')"></i>
        </span></li>`;
        count++;
    });
    showTasks(count)
});

function showTasks(count){
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent=count;
    if (count > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }
}
// Eliminar datos
function deleteTask(id) {
    db.collection("Lista de tareas").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    //showTasks(count);
}

// Editar datos
function showEditTask(id1) {
    document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none";
    //document.getElementById("nuevaTarea").value = "";
    });
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block";
    numeroTarea = id1;
    console.log(numeroTarea)  
    document.getElementById("keyTarea").value = id1;
    console.log('**********************')
    console.log(id1)
    
}

async function editTask() {
    var id = document.getElementById("keyTarea").value;
    var tareaE = document.getElementById("nuevaTarea").value;
    console.log(tareaE);
    console.log('+++++++++++++++++++');
    console.log(id);
    //var washingtonRef = db.collection("Lista de tareas").doc(id);

    // Set the "capital" field of the city 'DC'
    return db.collection("Lista de tareas").doc(id).set({
        tarea: tareaE 
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        console.log('==========================================================')
    });
    //showTasks();
}

deleteAllBtn.onclick = () => {
    db.collection("Lista de tareas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            doc.ref.delete();
        });
    });
}