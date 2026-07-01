import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from '../api/authService';
import { authStorage } from '../../../infrastructure/storage/auth.storage';
import { useNavigate } from 'react-router-dom';

export const authKeys = {
  me: ['me'] as const,
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      authStorage.setToken(data.data.token);
      queryClient.setQueryData(authKeys.me, data.data.user);
      navigate('/');
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authService.logout,
    onSettled: () => {
      authStorage.clear();
      queryClient.clear();
      navigate('/login');
    },
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: authKeys.me,
    queryFn: () => authService.getMe().then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
    enabled: !!authStorage.getToken(),
  });
};