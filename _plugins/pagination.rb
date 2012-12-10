#--
###############################################################################
#                                                                             #
# jekyll-pagination -- Jekyll plugin to extend the pagination generator       #
#                                                                             #
# Copyright (C) 2010-2011 University of Cologne,                              #
#                         Albertus-Magnus-Platz,                              #
#                         50923 Cologne, Germany                              #
#                                                                             #
# Authors:                                                                    #
#     Jens Wille <jens.wille@uni-koeln.de>                                    #
#                                                                             #
# jekyll-pagination is free software; you can redistribute it and/or modify   #
# it under the terms of the GNU Affero General Public License as published by #
# the Free Software Foundation; either version 3 of the License, or (at your  #
# option) any later version.                                                  #
#                                                                             #
# jekyll-pagination is distributed in the hope that it will be useful, but    #
# WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY  #
# or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public      #
# License for more details.                                                   #
#                                                                             #
# You should have received a copy of the GNU Affero General Public License    #
# along with jekyll-pagination. If not, see <http://www.gnu.org/licenses/>.   #
#                                                                             #
###############################################################################
#++

module Jekyll

  class Page

    alias_method :_pagination_original_dir=, :dir=

    # Overwrites the original method to also set +basename+ when there's
    # a +pager+. NOTE: Depends on +pager+ being set before setting +dir+.
    def dir=(dir)
      @basename = 'index' if @pager
      @dir = dir
    end

    alias_method :_pagination_original_index?, :index?

    # Overwrites the original method to also include the configured
    # paginate file(s) in the evaluation.
    def index?
      Pager.paginate_files(@site.config).include?("#{basename}.html")
    end

  end

  class Pager

    class << self

      def paginate_files(config)
        config['paginate_files'] ||= ['index.html']
        config.pluralized_array('paginate_file', 'paginate_files')
      end

      alias_method :_pagination_original_pagination_enabled?, :pagination_enabled?

      # Overwrites the original method to check +paginate_file+ and
      # +paginate_files+ configuration options.
      def pagination_enabled?(config, file)
        paginate_files(config).include?(file) if config['paginate']
      end

    end

  end

end