// useUserStore.js
import create from 'zustand';

const useUserStore = create((set) => ({
    user: null,
    isVerified: false,
    setUser: (user) => set((state) => {
        const isVerified = user.role === 'employer'
            ? user.employer.every(emp => emp.profile_verified)
            : user.jobseeker.every(js => js.profile_verified);
        return { ...state, user, isVerified }; // Return the entire state including user and isVerified
    }),
    setIsVerified: (status) => set({ isVerified: status }),
}));

export default useUserStore;
