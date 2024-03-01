<!-- result.svelte -->

<script>
	export let data;
</script>

<main>
	{#if data}
		<div class="flex min-h-screen items-center px-4">
			<div class="mx-auto w-full max-w-md space-y-4">
				<div
					class="bg-card text-card-foreground w-full max-w-sm rounded-lg border shadow-sm"
					data-v0-t="card"
				>
					<div class="flex flex-row space-y-1.5 p-6">
						<div class="grid gap-1.5">
							<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
								Results
							</h3>
							<p class="text-muted-foreground text-sm">Current score and statistics</p>
						</div>
					</div>
					<div class="flex flex-col items-center gap-2 p-6">
						<p class="mb-2">Current Score: {data.currentScore}</p>
						<p class="mb-2">Total Score: {data.totalScore}</p>
						<p class="mb-2">Submitted Questions Count: {data.submittedCount}</p>
						<p class="mb-2">Full Score Count: {data.fullScoreCount}</p>
						<p class="mb-2">Full Score Percent: {data.fullScorePercent}%</p>
						<p>Question Count: {data.questionCount}</p>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: {data.fullScorePercent}%"></div>
                          </div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</main>

<style>
	/* Add your styles here */
</style>
