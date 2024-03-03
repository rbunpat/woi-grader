<script>
	import { navigating } from '$app/stores';
import '../app.css';
</script>

{#if $navigating}
<div class="flex min-h-screen items-center px-4">
	<div class="mx-auto w-full max-w-md space-y-4">
		<div
			class="bg-card text-card-foreground w-full max-w-sm rounded-lg border shadow-sm animate-pulse"
			data-v0-t="card"
		>
			<div class="flex flex-row space-y-1.5 p-6">
				<div class="grid gap-1.5">
					<div class="h-6 bg-gray-300 rounded w-3/4"></div>
					<div class="h-4 bg-gray-300 rounded w-1/2"></div>
				</div>
			</div>
			<div class="flex flex-col items-center gap-2 p-6">
				<div class="h-4 bg-gray-300 rounded w-3/4"></div>
				<div class="h-4 bg-gray-300 rounded w-2/3"></div>
				<div class="h-4 bg-gray-300 rounded w-2/4"></div>
				<div class="h-4 bg-gray-300 rounded w-3/5"></div>
				<div class="h-4 bg-gray-300 rounded w-4/6"></div>
				<div class="h-4 bg-gray-300 rounded w-1/2"></div>
				<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
					<div class="bg-gray-300 h-2.5 rounded-full animate-pulse"></div>
				</div>
			</div>
		</div>
	</div>
</div>
{:else}
	<slot />
{/if}
<!-- 
<slot /> -->
