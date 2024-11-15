<script>
    let {data} = $props();
    let currentQuestion = $state(0);
    import ListItem from "$lib/fonts/components/ListItem.svelte";
    let selectedAnswer = $state('')
    let score = $state(0)
    let submitted = $state(false);
    let userAnswers = $state([]);
    let finalData

    function handleSubmit() {
        submitted = true;
        data.questions[currentQuestion].userAnswer = selectedAnswer;
        userAnswers = [...userAnswers, selectedAnswer];
        if (selectedAnswer === data.questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if(currentQuestion === 10) {
            console.log('done')
        }
        selectedAnswer = '';
        data.questions[currentQuestion].userAnswer = selectedAnswer;
    }
    
</script>

{#each data.questions as question, index (question.question)}
    {#if index === currentQuestion}
    <p>Question {index +1} of {data.questions.length}</p>
    <progress class="progress progress-primary w-56" value={currentQuestion +1} max="10"></progress>
    <p class="font-bold mt-2 mb-5">Your Score {score}</p>
    <h2>{question.question}</h2>
    {#each question.options as option, index (option)}
    <div class="my-3">
        {#key submitted}
        <ListItem 
            title={option} 
            {index} 
            correctAnswer={data.questions[currentQuestion-1].userAnswer === question.answer} 
            focusAction={()=> {
                selectedAnswer = option;
            }}
        />
        {/key}
        </div>
    {/each}
    {/if}
{/each}

<button class="
btn btn-primary 
{selectedAnswer === ''? "btn-disabled" : ""} 
{currentQuestion === 9? "hidden" : ""}" 
onclick={handleSubmit}>Submit</button>

<a href="{data.title.toLowerCase()}/result">
<button class="
btn 
btn-primary 
{selectedAnswer === ''? "btn-disabled" : ""} 
{currentQuestion === 9? "" : "hidden"}" 
onclick={handleSubmit}>Finish</button>
</a>