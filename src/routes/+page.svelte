<script lang="ts">
	import { goto } from '$app/navigation';
	let username = '';
	let password = '';
    let loading = false;

	function handleSubmit(event: Event) {
		event.preventDefault();
		// const form = event.target as HTMLFormElement;
		// const username = form.username.value;
		// const password = form.password.value;
		console.log(username, password);

		goto('/result?username=' + username + '&password=' + password);
        loading = true;

	}
</script>

<div class="flex min-h-screen items-center px-4">
	<div class="mx-auto w-full max-w-md space-y-4">
		<div class="text-center">
			<h1 class="text-3xl font-bold">WOI Grader Result</h1>
			<p class="text-gray-500 dark:text-gray-400">Login to your account</p>
		</div>
		<div class="space-y-4">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="username">Username</label
					><input
						class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						id="username"
						placeholder="Your Username"
						type="username"
                        bind:value={username}
					/>
				</div>
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="password">Password</label
					><input
						class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						id="password"
						type="password"
                        placeholder="Your Password"
                        bind:value={password}
					/>
				</div>
                <div class="mt-4">

                  </div>
				<button
					type="submit"
					class="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					>Login
                    {#if loading}
                    <svg id=spinnerino role="status" class="inline w-4 h-4 me-3 text-white animate-spin fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentFill"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                        </svg>
                    {/if}
                    </button
				>
			</form>
		</div>
	</div>
</div>
