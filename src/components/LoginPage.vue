<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToSignup = () => {
  router.push('/'); // Navigate to the root path (SignupView)
};
</script>

<template>
  <div class="login-page">
    <header class="app-header">
      <h1 class="project-title">X-Ray Exposure Calculator</h1>
      </header>

    <main class="login-main-content">
      <section class="login-card">
        <h2>Welcome Back! Please Sign In</h2>
        <p>This is where your elegant login form will be designed.</p>
        <button class="action-button primary">Log In</button>
        <p class="switch-link-container">
          Or <a href="#" @click.prevent="router.push('/dashboard')">Go to Dashboard (Temp)</a>
        </p>
        <p class="switch-link-container">
          Don't have an account? <a href="#" @click.prevent="navigateToSignup">Sign Up</a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Inherit common styles from SignupView if desired, or define new ones */
/* For simplicity, we'll keep some basic structural styles here */

.login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.app-header {
  background-color: #F1E234; /* Bright Yellow */
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 80px;
}

.project-title {
  color: #000; /* Black text */
  font-size: 2.8em;
  font-weight: 800;
  text-align: center;
  flex-grow: 1;
}

.login-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
}

.login-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  border: 1px solid #eee;
}

.login-card h2 {
  color: #8D99AE;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.login-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

.action-button {
  background-color: #8D99AE;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.15em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px; /* Space before the link */
}

.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}

.switch-link-container {
  font-size: 0.95em;
  color: #666;
}

.switch-link-container a {
  color: #8D99AE;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.switch-link-container a:hover {
  color: #5a6473;
  text-decoration: underline;
}

/* Responsive Adjustments (similar to SignupView) */
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    padding: 15px 20px;
  }

  .project-title {
    font-size: 2em;
    margin-bottom: 15px;
  }

  .login-card {
    padding: 30px;
  }

  .login-card h2 {
    font-size: 1.8em;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 1.6em;
  }

  .action-button {
    padding: 12px 20px;
    font-size: 1em;
  }
}
</style>
