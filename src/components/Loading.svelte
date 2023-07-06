<script>
  import loadingLogo from 'src/assets/logo/Loading.gif';
</script>

<div class="loading-container">
  <img src={loadingLogo} alt="Loading" class="loading-logo" />
</div>

<style>
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loading-logo {
    width: 100px; /* Adjust the size as needed */
    height: 100px;
    /* Add any additional styles to position or animate the logo */
  }
</style>