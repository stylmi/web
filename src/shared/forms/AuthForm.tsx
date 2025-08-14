import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {
  mode: 'signin' | 'signup'
  onSubmit: (values: any) => Promise<void> | void
  isLoading?: boolean
}

const AuthForm: React.FC<Props> = ({ mode, onSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm()
  return (
    <form className="space-y-4" onSubmit={handleSubmit((v) => onSubmit(v))}>
      {mode === 'signup' && (
        <input className="input-field" placeholder="Name" {...register('name')} />
      )}
      <input className="input-field" type="email" placeholder="Email" {...register('email')} />
      <input className="input-field" type="password" placeholder="Password" {...register('password')} />
      <button className="btn-primary w-full py-3" disabled={isLoading}>
        {mode === 'signin' ? 'Sign in' : 'Create account'}
      </button>
    </form>
  )
}

export default AuthForm


