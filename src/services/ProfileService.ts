import { } from 'runtypes';

const PROFILE_LOCAL_STORAGE_KEY = 'profile'

type Profile = 'business' | 'recruiter' | 'unknown';

async function getCurrentProfile(): Promise<Profile | undefined> {
  if (!localStorage) {
    return undefined;
  }
  let profileString: string | null = localStorage.getItem(PROFILE_LOCAL_STORAGE_KEY);
  if (!profileString) {
    return undefined;
  }
  run
}

export default { };