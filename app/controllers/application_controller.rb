class ApplicationController < ActionController::Base
 # before_action :configure_permitted_parameters, if: :devise_controller?
 before_action :configure_permitted_parameters , if: :devise_controller?
  protect_from_forgery with: :exception

  protected

  def configure_permitted_parameters
    added_attrs = [:name, :email, :user_image, :password_confirmation, :password, :user_name,:user_name, :stay_period, :study_period, :twiiter, :instagram, :image]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
  end
end
