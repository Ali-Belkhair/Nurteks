import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <>
      <Head title="Admin Login" />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          {/* Replace with your real logo image or svg */}
          <div
            className="w-20 h-20 rounded-full bg-[#15803D] flex items-center justify-center text-white text-3xl font-bold shadow-lg"
            aria-label="Nurteks Logo"
          >
            N
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-[#15803D]">
            Nurteks Morocco Admin
          </h1>
        </div>

        {/* Login Form Container */}
        <form
          onSubmit={submit}
          className="bg-white shadow-md rounded-lg max-w-md w-full p-8 space-y-6"
          noValidate
        >
          {status && (
            <div className="text-center text-sm font-medium text-green-600 mb-4">
              {status}
            </div>
          )}

          <div>
            <InputLabel htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full rounded-md border-gray-300 focus:border-[#15803D] focus:ring focus:ring-[#15803D]/50"
              autoComplete="username"
              isFocused={true}
              onChange={(e) => setData('email', e.target.value)}
            />
            <InputError message={errors.email} className="mt-2" />
          </div>

          <div>
            <InputLabel htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full rounded-md border-gray-300 focus:border-[#15803D] focus:ring focus:ring-[#15803D]/50"
              autoComplete="current-password"
              onChange={(e) => setData('password', e.target.value)}
            />
            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <Checkbox
                name="remember"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
              />
              <span className="text-sm text-gray-600 select-none">Remember me</span>
            </label>

            {canResetPassword && (
              <Link
                href={route('password.request')}
                className="text-sm text-[#15803D] hover:underline"
              >
                Forgot your password?
              </Link>
            )}
          </div>

          <PrimaryButton
            className="w-full py-3 text-lg font-semibold"
            disabled={processing}
          >
            Log in
          </PrimaryButton>
        </form>
      </div>
    </>
  );
}
