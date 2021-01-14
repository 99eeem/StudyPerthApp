# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController

  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
   def new
     super
     flash.delete(:notice)

   end

  # POST /resource/sign_in
   def create
    super
    flash.delete(:notice)
    render new_user_registration_path
  end

  # DELETE /resource/sign_out
   def destroy
     super
     flash.delete(:notice)
   end
   def new_guest
    user=User.guest
    user.user_name="I am guest user"
    user.user_image="/taro.png"
    sign_in user
    redirect_to root_path

   end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
