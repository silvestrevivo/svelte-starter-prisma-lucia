<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<h1>Register user</h1>

<form
  method="POST"
  action="/register"
  use:enhance
  class="max-w-96 space-y-4 rounded-lg border border-gray-200 p-10"
>
  <div>
    <label for="username">Username</label>
    <input
      type="text"
      name="username"
      id="username"
      class="border border-black"
    />
  </div>

  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" class="border border-black" />
  </div>

  <div>
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      class="border border-black"
    />
  </div>

  <button type="submit" class="border border-black p-2">Register</button>
</form>
