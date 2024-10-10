<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { superForm } from 'sveltekit-superforms/client';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { loginUserSchema } from '$schemas/index';
  import { invalidateAll } from '$app/navigation';
  import { Spinner } from '$lib/components';

  let { data } = $props();

  const { form, errors, enhance, delayed } = superForm(data.form, {
    validators: zodClient(loginUserSchema),
    onResult: ({ result }) => {
      if (result.type === 'success') {
        invalidateAll();
      } else if (result.type === 'failure') {
        error = result.data?.form.errors.message;
      }
    },
  });

  let error = $state('');
</script>

<svelte:window onkeypress={() => (error = '')} />

<h1>Login user</h1>

<form
  method="POST"
  action="/login"
  use:enhance
  class="w-full max-w-80 space-y-4 rounded-lg border border-gray-200 p-4"
>
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
      Login
    {/if}
  </Button>
</form>

{#if error}
  <p class="!mt-2 text-xs text-red-600">{error}</p>
{/if}

<a href="/register" class="cursor-pointer text-sm hover:text-accent"
  >Set up account</a
>
