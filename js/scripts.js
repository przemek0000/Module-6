{
    const taskTable = [

    ]

    const render = () => {
        let htmlString = "";
        for (const task of taskTable) {
            htmlString += `
            <li class="showTasks__output">
            <button class="showTasks__done">
               ✔
            </button>
             <div class="showTasks__read">
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
        taskTable.push(
            {
                content: getInput
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