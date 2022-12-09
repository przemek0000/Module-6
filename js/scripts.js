{
    const taskList = [];

    const toggleTaskDone = (index) => {
        taskList[index].done = !taskList[index].done;
            render();
    };

    const render = () => {
        let htmlString = "";
        for (const task of taskList) {
            htmlString += `
            <li class="showTasks__output">
            <button class="showTasks__done js-done">
            ${task.done === true ? "✔" : ""}
            </button>
             <div class="showTasks__read ${task.done === true ? " showTasks__outputLine" : ""}">
            ${task.content}
            </div>
            <div class="showTasks__remove">
            🗑
            </div>
            <div class="showTasks__endLine">
            <hr>
            </div>
            </li>
            `
        }

        const showOutput = document.querySelector(".js-output");
        showOutput.innerHTML = htmlString;

        const checkDone = document.querySelectorAll(".js-done");
        checkDone.forEach((check, index) => {
            check.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const clearAndFocus = () => {
        document.querySelector(".js-input").value = null;
        document.querySelector(".js-label").focus();
    };

    const onEventFormListiner = () => {
        let getInput = document.querySelector(".js-input").value.trim();
        if (!getInput) {
            return 1;
        }
        taskList.push(
            {
                content: getInput,
            });
        clearAndFocus();
        render();
    };

    const init = () => {

        const formListining = document.querySelector(".js-form");
        formListining.addEventListener("submit", (event) => {
            event.preventDefault();
            onEventFormListiner()
        });

        render();
    };

    init();
}