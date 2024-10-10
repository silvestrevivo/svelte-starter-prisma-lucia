<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { superForm } from 'sveltekit-superforms/client';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { registerUserSchema } from '$schemas/index';
  import { Spinner } from '$lib/components';

  let { data } = $props();

  const { form, errors, enhance, delayed } = superForm(data.form, {
    validators: zodClient(registerUserSchema),
    onResult: ({ result }) => {
      if (result.type === 'success') {
        seeLogin = true;
      } else if (result.type === 'failure') {
        error = result.data?.form.errors.message;
      }
    },
  });

  let error = $state(''),
    seeLogin = $state(true);
</script>

{#if !seeLogin}
  <h1>Register user</h1>
  <form
    method="POST"
    action="/register"
    use:enhance
    class="w-full max-w-80 space-y-4 rounded-lg border border-gray-200 p-4"
  >
    <Input
      type="username"
      placeholder="username"
      name="username"
      id="username"
      bind:value={$form.username}
    />
    {#if $errors.username}
      <p class="!mt-2 text-xs text-red-600">{$errors.username}</p>
    {/if}
    <Input
      type="email"
      placeholder="email"
      name="email"
      id="email"
      bind:value={$form.email}
    />
    {#if $errors.email}
      <p class="!mt-2 text-xs text-red-600">{$errors.email}</p>
    {/if}
    <Input
      type="password"
      placeholder="password"
      name="password"
      id="password"
      bind:value={$form.password}
    />
    {#if $errors.password}
      <p class="!mt-2 text-xs text-red-600">{$errors.password}</p>
    {/if}
    <Button type="submit" class="w-full">
      {#if $delayed}
        <Spinner />
      {:else}
        Register
      {/if}
    </Button>
  </form>

  {#if error}
    <p class="!mt-2 text-xs text-red-600">{error}</p>
  {/if}

  <a href="/login" class="cursor-pointer text-sm hover:text-accent">Log in</a>
{:else}
  <p>
    User is registered, you can <a
      href="/login"
      class="cursor-pointer underline hover:text-accent">Log in</a
    >
  </p>
{/if}
