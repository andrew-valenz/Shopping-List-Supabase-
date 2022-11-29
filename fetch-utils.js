const SUPABASE_URL = 'https://rgjgonabtsbaljvvbolx.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnamdvbmFidHNiYWxqdnZib2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MzI0NDEsImV4cCI6MTk4NDEwODQ0MX0.HeAaKRZ1xnZqK_sYxZHbVkw-xqmxk25eYNFoF6EEZRE';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./list');
    }
}
export async function signUpUser(email, password) {
    const response = await client.auth.signUp({
        email,
        password,
    });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({
        email,
        password,
    });
    return response.user;
}

export async function signOutUser() {
    const response = await client.auth.signOut();

    return (window.location.href = '../');
}

/* Data functions */
