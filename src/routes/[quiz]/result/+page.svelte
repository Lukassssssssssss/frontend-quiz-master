<script>
    export let data;
    let score = data.questions.filter(q => q.userAnswer === q.answer).length;
</script>

<div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Quiz Complete!</h1>
    <p class="text-xl mb-8">You scored {score} out of {data.questions.length}</p>

    {#each data.questions as question}
        <div class="mb-8">
            <h2 class="font-bold mb-2">{question.question}</h2>
            {#each question.options as option}
                <div class="p-3 my-2 rounded-lg flex justify-between {
                    option === question.answer ? 'bg-green-100  text-black' : 
                    option === question.userAnswer && option !== question.answer ? 'bg-red-100' : 
                    'bg-gray-100  text-black'
                }">
                    <span>{option}</span>
                    <div class="flex gap-2">
                        {#if option === question.userAnswer}
                            <span class="text-sm">Your answer</span>
                        {/if}
                        {#if option === question.answer}
                            <span class="text-sm text-green-600">Correct answer</span>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    {/each}

    <a href="/" class="btn btn-primary">Take Another Quiz</a>
</div>
