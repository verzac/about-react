import { Union, Literal, Static } from 'runtypes';

const PROFILE_LOCAL_STORAGE_KEY = 'profile'

const Profile = Union(
  Literal('business'),
  Literal('recruiter'),
  Literal('unknown'),
);

export type Profile = Static<typeof Profile>;

async function getCurrentProfile(): Promise<Profile | undefined> {
  if (!localStorage) {
    return undefined;
  }
  let profileString: string | null = localStorage.getItem(PROFILE_LOCAL_STORAGE_KEY);
  if (!profileString) {
    return undefined;
  }
  return Profile.check(profileString);
};

async function setProfile(profile?: Profile): Promise<void> {
  if (!localStorage) {
    throw new Error('Cannot get localStorage!');
  }
  if (profile === undefined) {
    localStorage.removeItem(PROFILE_LOCAL_STORAGE_KEY);
    return;
  }
  localStorage.setItem(PROFILE_LOCAL_STORAGE_KEY, profile);
}

async function clearProfile(): Promise<void> {
}

export const ProfileService = { getCurrentProfile, setProfile };